var UI = {

    Button : function(x,y,text,params) {

        //
        //Default Parameters
        //

        if (params == undefined) {
            params = {};
        }
        if (params.backgroundColor == undefined)
            params.backgroundColor = 0x01362f;
        if (params.textStyle == undefined) {
            params.textStyle = {
                fontFamily : 'Arial', 
                fontSize: 24, 
                fill : 0xEEEEEE
            }
        }

        //
        //Display Elements
        //

        var ourButton = new PIXI.Container();
            ourButton.interactive = true;
            ourButton.x = x;
            ourButton.y = y;

        var buttonBody = new PIXI.Graphics();
            buttonBody.fill(params.backgroundColor);
            buttonBody.filletRect(0, 0, 150, 75, 10);
            buttonBody.fill();
            ourButton.addChild(buttonBody);

            ourButton.body = buttonBody;
        
        var buttonText = new PIXI.Text(text, params.textStyle);
            buttonText.anchor.set(.5,.5);
            buttonText.x = 75;
            buttonText.y = 37.5;
            ourButton.addChild(buttonText);

            ourButton.label = buttonText;

        //
        //Event Listeners
        //

        //Click listener
        ourButton.onclick = function (e) {
            console.log("Clicked");
        };
        ourButton.on("click",(e) => ourButton.onclick(e));
        
        //Pointer down and up
        ourButton.pointerdown = function (e) {
            ourButton.alpha = 0.7;
        };
        ourButton.on("pointerover", (e) => ourButton.pointerdown(e));
        
        ourButton.pointerup = function (e) {
            ourButton.alpha = 1.0;
        };
        ourButton.on("pointerout",(e) => ourButton.pointerup(e));

        //Hover listeners
        ourButton.pointerover = function (e) {
            ourButton.alpha = 0.7;
        };
        ourButton.on("pointerover",(e) => ourButton.pointerover(e));
        
        ourButton.pointerout = function (e) {
            ourButton.alpha = 1.0;
        };
        ourButton.on("pointerout",(e) => ourButton.pointerout(e));

        ourButton.pointerupoutside = function (e) {
            ourButton.alpha = 1.0;
        };
        ourButton.on("pointerupoutside",(e) => ourButton.pointerupoutside(e));

        return ourButton;

    },

    

}