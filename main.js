const canvas = document.querySelector('canvas')
const c = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight
c.fillStyle = 'black'
c.fillRect(0, 0, canvas.width, canvas.height)

let xCenter = canvas.width / 2
let yCenter = canvas.height / 2
let right = canvas.width
let bottom = canvas.height

const wave = {
    length: 100,
    amplitude: 100,
    y: yCenter,
    frequency: 0.01
}
let hue = 0
let hueRadians = 0

const drawWave = () => {

    c.beginPath()
    c.moveTo(0, yCenter)
    for (let i = 0; i < right; i++) {
        c.lineTo(i, wave.y + (Math.sin(i * 1 / wave.length + speed)* (wave.amplitude * Math.sin(speed))))
    }
    hue = Math.abs(Math.sin(hueRadians) * 360)
    c.lineWidth = 3
    c.strokeStyle = `hsl(${hue}, 100%, 50%)`
    c.stroke()
    c.closePath
}

let speed = wave.frequency
function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = 'rgba(0, 0, 0, 0.03)'
    c.fillRect(0, 0, right, bottom)
    drawWave()

    speed += wave.frequency
    hueRadians += 0.001
}
animate()

window.addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight
    xCenter = canvas.width / 2
    yCenter = canvas.height / 2
    right = canvas.width
    bottom = canvas.height
}) 
