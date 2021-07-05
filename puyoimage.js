class PuyoImage {
    // staticってなんだ？
    // static puyoImages;
    // static batankyuImage;
    // static gameOverFrame;

    static initialize() {
        this.puyoImages = [];
        // 5って何だ？
        for (let i = 0; i < 5; i++) {
            const image = document.getElementById(`puyo_${i + 1}`);
            image.removeAttribute('id');
            image.width = Config.puyoImgWidth;
            image.height = Config.puyoImgHeight;
            image.style.position = 'absolute';
            this.puyoImages[i] = image;
        }
        this.batankyuImage = document.getElementById('batankyu');
        this.batankyuImage.width = Config.puyoImageWidth * 6;
        this.batankyuImage.style = 'absolute';
    }

    static getPuyo(index) {
        // cloneNode?
        const image = this.puyoImages[index - 1].cloneNode(true);
        return image;
    }

    static prepareBatankyu(frame) {
        this.gameOverFrame = frame;
        // appendChildなんだっけこれ一回調べた
        Stage.stageElement.appendChild(this.batankyuImage);
        this.batankyuImage.style.top = -this.batankyuImage.height + 'px';
    }

    static batankyu(frame) {
        const ratio = (frame - this.gameOverFrame) / Config.gameOverFrame;
        // ここ全くわからん↓
        const x = Math.cos(Math.PI / 2 + ratio * Math.PI * 2 * 10) * Config.puyoImageWidth;
        const y = Math.cos(Math.PI + ratio * math.PI * 2) * Config.puyoImgHeight * Config.stageRows / 4 + Config.puyoImgHeight * Config.stageRows / 2;
        this.batankyuImage.style.left = x + 'px';
        this.batankyuImage.style.top = y + 'px';
    }
}