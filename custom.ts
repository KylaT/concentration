//% weight=0 color=#b8860b icon="\uf004" block="Randomize"
//% advanced="true"
namespace shuffle {
    //% blockId="shuffle_shuffle"
    //% block="randomize array %array"
    //% array.defl="list" array.shadow="variables_get"
    export function shuffle(array: number[]): void {
        for (let index: number = 0; index < array.length; index++) {
            let random: number = Math.randomRange(0, array.length - 1)
            swap(array, index, random)
        }   // for (index)
    }   // shuffle()

    function swap(array: number[], index1: number, index2: number) {
        if (index1 !== index2) {
            let temp: number = array[index1]
            array[index1] = array[index2]
            array[index2] = temp
        }   // if (index1 !== index2)
    }   // swap()
}   // namespace shuffle