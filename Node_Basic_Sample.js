/*Program start Node.js*/
/*Self calling function at start of program*/
(
function main()
{
console.log(getCurrentDateTime());
}
)
(); //self calling syntax.


/*Function to get date time*/
function getCurrentDateTime()
{
return new Date();
} 
