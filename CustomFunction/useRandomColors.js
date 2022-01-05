

export default function useRandomColors(data) {
    let hue = 0;
    let colors = []
    for (let j = 0; j < data.length; j++) {
        let color = "hsl(" + hue + ",100%,50%)"      
        colors.push(color)      
        hue += 500
    }
    
    return {colors}
    
}


   // let colors = []
    // for (let j = 0; j < data.length; j++){
    //     let rgb = [];
    //     for (let i = 0; i < 3; i++){            
    //         rgb.push(Math.floor(Math.random() * 255));

    //     }

    //  colors.push('rgb(' + rgb.join(',') + ')');

    // }