while True:
    input.sound_level()

    if input.sound_level() > 5:
        light.show_animation(light.rainbowAnimation, 5000)

    else: 
        light.set_all(light.rgb(255,255,255))
