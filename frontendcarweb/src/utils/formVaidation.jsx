const carAddValidation = ({
  name,
  catagory,
  year,
  color,
  mileage,
  transmission,
  maxSpeed,
  feulType,
  price,
  seat,
  reverseCamera,
  bluetooth,
  fmRadio,
  climateControl,
  image
}) => {
    if(!name){
        return "Please Enter a name"
    }else if(!catagory){
        return "Please Select a catagory"
    }else if(!year){
        return "Please Enter a year"
    }else if(!color){
        return "Please Enter a color"
    }else if(!mileage){
        return "Please Select a mileage"
    }else if(!transmission){
        return "Please Select a transmission"
    }else if(!maxSpeed){
        return "Please Enter a max speed"
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
    }else if(!fmRadio){
        return "Please Select a FM radio option"
    }else if(!climateControl){
        return "Please Select aclimate control option"
    }
    else if(!image){
        return "Please Choose the image"
    }
};



export default carAddValidation;