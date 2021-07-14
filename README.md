# 参考文献
https://puyo.sega.jp/program_2020/dl/puyo-programming-code.pdf

## 知らなかったメソッド
- `preventDefault()`
ユーザーが行うDOMイベントで(click,  keypressなど)デフォルトの操作を発生させないようにする
```
myButton.addEventListener( 'click', function(e){
  e.preventDefault(); // clickイベントに関して「preventDefault」する
});
```

![スケッチ](https://user-images.githubusercontent.com/81735085/125610403-5b59e97b-e126-408d-a857-769041b83f40.png)
