type ScalerArgs = {
    file : Blob
    scale : number
}

export const getBase64Thumbnail = ({
    file,
    scale
} : ScalerArgs) : Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                let w = (canvas.width = img.width * scale);
                let h = (canvas.height = img.height * scale);
                const ctx = canvas.getContext('2d');
                if(!ctx){
                    return
                }

                ctx.drawImage(img, 0, 0, w, h);

                return resolve(canvas.toDataURL());
            }
            reader.onerror = (error) => reject(error.toString())
            img.src = e?.target?.result as string
        }
    })
}   