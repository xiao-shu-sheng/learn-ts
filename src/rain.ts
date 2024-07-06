let canvas = document.querySelector('canvas') as HTMLCanvasElement
let ctx = canvas.getContext('2d') as CanvasRenderingContext2D 
canvas.width = screen.availWidth
canvas.height = screen.availHeight
let rainStr: string[] = '阿珍爱上了阿强，在一个没有雨的晚上'.split('')
let rainArr = Array(Math.ceil(canvas.width / 10)).fill(0)
console.log(rainArr)
const rain = () => {
    ctx.fillStyle = 'rgba(0,0,0, 0.05)'
    ctx?.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#0f0'
    rainArr.forEach((i, index) => {
        ctx.fillText(
            rainStr[Math.floor(Math.random() * rainStr.length)],
            index * 10,
            i + 10,
        )
        rainArr[index] = i > canvas.height || i > Math.random()*10000 ? 0 : i + 10
    })
}
setInterval(rain, 40)