const carAddValidation = ({
  name,
  catagory,
  AC,
  color,
  mileage,
  transmission,
  door,
  feulType,
  price,
  seat,
  reverseCamera,
  bluetooth,
  wheel,
  driver,
  climateControl,
  image
}) => {
    if(!name){
        return "Please Enter a name"
    }else if(!catagory){
        return "Please Select a catagory"
    }else if(!AC){
        return "Please Slect AC"
    }else if(!color){
        return "Please Enter a color"
    }else if(!mileage){
        return "Please Select a mileage"
    }else if(!transmission){
        return "Please Select a transmission"
    }else if(!door){
        return "Please Enter a door"
    }else if(!feulType){
        return "Please Select a feul type"
    }else if(!price){
        return "Please Enter a price"
    }else if(!seat){
        return "Please Select a seat"
    }else if(!reverseCamera){
        return "Please Select a reverse camera option"
    }else if(!bluetooth){
        return "Please Select a bluetooth option"
    }else if(!wheel){
        return "Please Enter a wheel"
    }else if(!climateControl){
        return "Please Select aclimate control option"
    }else if(!driver){
        return "Please Enter Driver price"
    }
    else if(!image){
        return "Please Choose the image"
    }
};



export default carAddValidation;