class Config {
}
// なぜからのクラスを定義して毎度Config.~のように呼び出しているの？（別ファイルからも同じ）
Config.puyoImgWidth = 40;
Config.puyoImgHeight = 40;
Config.fontHeight = 33;
Config.stageCols = 6;
Config.stageRows = 12;
Config.puyoImgHeight = (window.innerHeight - Config.fontHeight) / Config.stageRows
Config.puyoImgWidth = Config.puyoImgHeight
Config.puyoColors = 4;
Config.playerFallingSpeed = 0.9;
Config.playerDownSpeed = 10;
Config.GroundFrame = 20; //何フレーム設置したらぷよを固定するか
Config.playerMoveFrame = 10;
Config.playerRotateFrame = 10;
Config.zenkeshiDuration = 150;; // 全消し時のアニメーション150ms
Config.gameOverFrame = 3000;  // ゲームオーバー演出のサイクルフレーム
