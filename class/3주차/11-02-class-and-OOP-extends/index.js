const aaa = new Date()
console.log(aaa.getFullYear())
console.log(aaa.getMonth() +1)

class Monster {
    power = 10


    constructor(aaa) {
        this.power = aaa

    }

    attack = () => {
        console.log("공격해여")
        console.log("내 공격력은 " + this.power + "야")

    }

}

class SkyMoster extends Monster {
    constructor(qqq) {
        super(qqq)

    }

    run = () => {
        console.log("날아서 도망가욥")
    }
}

class GroundMonster extends Monster {
    constructor(wwww) {
        super(wwww)
    }
    run = () => {
        console.log("뛰어서 도망가여")
    }
}
const mymonster1 = new SkyMoster(10)
mymonster1.attack()
mymonster1.run()

const mymonster2 = new GroundMonster(50)
mymonster2.attack()
mymonster2.run()