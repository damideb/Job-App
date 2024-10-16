export function formatDate(date:string){
     const dateObject = new Date(date);

     const formattedDate = dateObject.toLocaleDateString("en-US", {
       year: "numeric",
       month: "short",
       day: "numeric",
     });

     return formattedDate
}