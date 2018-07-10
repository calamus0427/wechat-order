<template>
    <canvas id="canvas">
    </canvas>
</template>
<script>
export default {
    name:'CLCanvasBg1',
    props: {
      //原点数量
        dotsNum: {
            type: Number,
            default: 50
        },
        //彩色还是黑白
        isColor: {
            type: Boolean,
            default: true
        },
        //圆的颜色
        roundColor: {
            type: String,
            default: "#999"
        },
        //直线颜色
        lineColor: {
            type: String,
            default: "#ccc"
        }
    },
    mounted() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        const rndCl = () => Math.floor(Math.random() * 225);
        const width = window.innerWidth;
        const height = window.innerHeight;
        var base_list = [];
        canvas.width = width;
        canvas.height = height;
        // 绘制园
        const drawRounds = (obj, index) => {
            let { x, y, r, color } = obj;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            if (this.isColor) {
                ctx.fillStyle = color;
            } else {
                ctx.fillStyle = this.roundColor
            }
            ctx.fill();
            ctx.closePath();
        }

        //判断移动方向
        const controlDirection = (obj) => {
            if (obj.x >= (width - obj.r)) {
                obj.controlX = "left";
            } else if (obj.x <= parseInt(obj.r / 2)) {
                obj.controlX = "right";
            }
            if (obj.y >= (height - obj.r)) {
                obj.controlY = "bottom";
            } else if (obj.y <= parseInt(obj.r / 2)) {
                obj.controlY = "top"
            }
            return obj
        }
        //划线
        const drawLine = (list) => {
            list.map((item, index) => {
                ctx.beginPath();
                ctx.moveTo(item.x1, item.y1);
                ctx.lineTo(item.x2, item.y2);
                ctx.LineWeight = 1;
                if (this.isColor) {
                    ctx.strokeStyle = item.color;
                } else {
                    ctx.strokeStyle = this.lineColor
                }
                ctx.stroke();
                ctx.closePath();
            })
        }
        //绘制
        const draw = (list) => {
            let dots_arr = [];
            let line_arr = [];
            list.map((item, index) => {
                let xy = controlDirection(item);
                let obj = roundMove(xy);
                dots_arr.push(obj);
            });
            dots_arr.map((item1, index1) => {
                dots_arr.map((item2, index2) => {
                    if (item1 !== item2) {
                        let x = item1.x - item2.x;
                        let y = item1.y - item2.y;
                        if (Math.abs(x) < 150 && Math.abs(y) < 150) {
                            let obj = {
                                x1: item1.x,
                                y1: item1.y,
                                x2: item2.x,
                                y2: item2.y,
                                color: item1.color
                            }
                            line_arr.push(obj)
                        }
                    }
                })
            })
            drawLine(line_arr);
            dots_arr.map((item, index) => {
                drawRounds(item, index)
            })
            base_list = dots_arr;
            setTimeout(() => {
                // if(this.paused){
                reDraw()
                // }
            }, 50)
        }
        const reDraw = () => {
            ctx.clearRect(0, 0, width, height);
            draw(base_list)
        }
        //移动
        const roundMove = (obj) => {
            switch (obj.controlX) {
                case "right":
                    obj.x++;
                    break;
                case "left":
                    obj.x--;
                    break;
                default:
            }
            switch (obj.controlY) {
                case "top":
                    obj.y++;
                    break;
                case "bottom":
                    obj.y--;
                    break;
                default:
            }
            return obj
        }
        //创造圆点
        const creatDots = () => {
            let arr = [];
            for (let i = 0; i < this.dotsNum; i++) {
                let obj = {};
                obj.x = parseInt(Math.random() * width);
                obj.y = parseInt(Math.random() * height);
                obj.r = parseInt(Math.random() * 10);
                obj.controlX = parseInt(Math.random() * 10) > 5 ? "left" : "right"
                obj.controlY = parseInt(Math.random() * 10) > 5 ? "bottom" : "top"
                obj.color = `rgba(${rndCl()},${rndCl()},${rndCl()},.3)`
                arr.push(obj)
            }
            return arr
        }
        draw(creatDots())
        //鼠标移动
        const moveXY = (event) => {
            let obj = {};
            obj.x = event.clientX;
            obj.y = event.clientY;
            obj.r = 0;
            base_list[0] = obj;
            base_list[0]["r"] = 1;
        }
        //鼠标点击
        const addXY = (event) => {
            let obj = {};
            obj.x = event.clientX;
            obj.y = event.clientY;
            obj.r = parseInt(Math.random() * 10);
            obj.color = `rgba(${rndCl()},${rndCl()},${rndCl()},.3)`;
            obj.controlX = parseInt(Math.random() * 10) > 5 ? 'left' : 'right'
            obj.controlY = parseInt(Math.random() * 10) > 5 ? 'bottom' : 'top'
            base_list.push(obj);
        }
        window.addEventListener("mousemove", moveXY);
        window.addEventListener("click", addXY)
    },

}
</script>
<style>
    #canvas{
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
    }
</style>
