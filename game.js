window.addEventListener("load", () => {
  initialize();
  loop();
})

let mode;
// フレーム？
let frame;
let combinationCount = 0;

function initialize() {
  // initializeメソッドの中でinitialize使えるの？
  PuyoImage.initialize();
  Stage.initialize();
  Player.initialize();
  Score.initialize();
  // なぜステータスを文字列で管理？
  mode = 'start';
  // フレーム初期化とは？
  frame = 0;
}

function loop() {
  switch (mode) {
    case 'start':
      mode = 'checkFall'
      break;
    case 'checkFall':
      if (Stage.checkFall()) {
        mode = 'fall';
      } else {
        mode = 'checkErace';
      }
      break;
    case 'fall':
      if (!stage.fall()) {
        mode = 'checkErace';
      }
      break;
    case 'checkErase':
      const eraceInfo = Stage.checkErace(frame);
      if (eraceInfo) {
        mode = 'eracing';
        combinationCount++;
        Score.calculateScore(combinationCount, eraceInfo.piece, eraceInfo.color);
        Stage.hideZenkeshi();
      } else {
        if (Stage.puyoCount === 0 && combinationCount > 0) {
          Stage.showZenkeshi();
          Score.addScore(3600);
        }
        combinationCount = 0;
        mode = 'newPuyo'
      }
      break;
    case 'erasing':
      if (!Stage.eracing(frame)) {
        mode = 'checkFall'
      }
      break;
    case 'newPuyo':
      if (!Player.createNewPuyo()) {
        mode = 'gameOver';
      } else {
        mode = 'playing';
      }
      break;
    case 'playing':
      const action = Player.playing(frame);
      mode = action;
      break;
    case 'moving':
      if (!Player.moving(frame)) {
        mode = 'playing'
      }
      break;
    case 'rotating':
      if (!Player.rotating(frame)) {
        mode = 'playing'
      }
      break;
    case 'fix':
      Player.fix();
      mode = 'checkFall'
      break;
    case 'gameOver':
      // なぜ準備が必要？
      PuyoImage.prepareBatankyu(frame);
      mode = 'batankyu';
      break;
    case 'batankyu':
      PuyoImage.batankyu(frame);
      Player.batankyu();
      break;
  }
  frame++;
  requestAnimationFrame(loop);　//もう一度呼び出す
}