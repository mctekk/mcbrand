
export const fadeInRight= {
    hidden: {
        x: 1000
    },
    visible: {
        x: 0,
        transition: {
            duration: 2,
        }
    }
}

export const fadeIn = {
    start: {
        opacity: 0,
        scale: 0
    },
    stop: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 1,
            ease: 'linear'
        }
    }
}

export const fadeInLeft = {
    start: {
        opacity: 0,
        translateX: -100
    },
    stop: {
        opacity: 1,
        translateX: 0,
        transition: {
            duration: 1,
            ease: 'linear'
        }
    }
}

export const fadeDownLeft = {
    start: {
        opacity: 0,
        translateY: 300,
        translateX: -300
    },
    stop: {
        opacity: 1,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 1,
            ease: 'linear'
        }
    }
}

export const fadeDownRight = {
    start: {
        opacity: 0,
        translateY: 300,
        translateX: 300
    },
    stop: {
        opacity: 1,
        translateY: 0,
        translateX: 0,
        transition: {
            duration: 1,
            ease: 'linear'
        }
    }
}

export const fade = {
    start: {
        opacity: 0,
    },
    stop: {
        opacity: 1,
        transition: {
            duration: 1,
            ease: 'linear'
        }
    }
}
