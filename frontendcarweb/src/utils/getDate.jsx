export const getDates = (date)=>{
    const dateObject = new Date(date);

    const formattedDateString = dateObject.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
    return(formattedDateString)
    // console.log(formattedDateString); // Output: Jan 25, 2024
}