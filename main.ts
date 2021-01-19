while (true) {
    input.soundLevel()
    if (input.soundLevel() > 150) {
        light.showAnimation(light.rainbowAnimation, 5000)
    } else {
        light.setAll(light.rgb(255, 255, 255))
    }
    
}
