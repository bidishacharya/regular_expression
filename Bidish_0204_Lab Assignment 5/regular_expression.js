/*Question 1*/
function check(phone){
    var patt = /^(98)[0-9]{8}$/; //regex for phone number
    if (phone.match(patt) && phone.length == 10) 
		{ //check the pattern and length
            document.write("Valid phone number: " + phone)
        }
    else
	{
        document.write("Wrong")
    }
}

/*Question 2*/
function check_Domain(str)
{
    //pattern for domain starts with www and ends with com, net or org
    pattern = /^(w{3}[\.])?([a-z0-9\-])+\.((com)|(org)|(net))$/i;

    if (pattern.test(str)) //check for input
    {
        document.write("Correct domain " + str);
    }
    else
    {
        document.write("Incorrect domain " + str);
    }
}

/*Question 3*/
function is_alphaDash()
{
    var input = prompt("Enter a string:");

    // definition of the regular expression to
    regexp = /[a-zA-Z_\-]/;

    if (regexp.test(input))
    {
        document.write("Correct Pattern " + input);
    }
    else
    {
        document.write("Incorrect Pattern");
    }
}

/*Question 4*/
function valid_Date(str)
{
    //regex for input pattern
    //input pattern must be mm/dd/yyyy
    var pattern = /^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/;
    var t = str.match(pattern);

    if(t)
	{
        document.write("Correct Date String");
    }
    else
	{
        document.write("Incorrect Date String");
    }
}

/*Question 5*/
function is_timeString(str)
{
    //regular expression for time pattern match (hh:mm:ss)
    regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;

    if (regexp.test(str))
    {
        document.write("Correct time pattern");
    }
    else
    {
        document.write("Incorrect time pattern");
    }
}

/*Question 6*/
function check_hex(inp)
{
    var hexPatt  = /^#[0-9A-F]{6}$/i; //regex for hex code color match
    if(hexPatt.test(inp))
	{
        document.write("Correct HEX code");
    }
    else
	{
        document.write("Incorrect HEX code");
    }
}


