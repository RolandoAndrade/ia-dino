class ImageLoader
{
    static load()
    {
        ImageLoader.img=new Image();
        ImageLoader.img.src="img/200-offline-sprite.png";
    }
    static getImage()
    {
        return ImageLoader.img;
    }

    static drawImage(image,x,y,width,height)
    {
        ctx.drawImage(ImageLoader.getImage(),image.x,image.y,image.w,image.h,x,y,width,height);
    }
}