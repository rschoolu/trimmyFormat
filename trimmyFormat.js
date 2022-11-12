function trimmyFormat(number,shortExtensions) {
    String.prototype.count=function(c) { 
        var result = 0, i = 0;
        for(i;i<this.length;i++)if(this[i]==c)result++;
        return result;
      };
    let formattedNumber = Intl.NumberFormat().format(number)
    let extensions = ['', 'K', 'M', 'B', 't', 'qdr', 'qnt', 'sxt', 'spt', 'oct', 'nni', 'dci','ndci','dodci','trdci','qutrdci','qnqadeci','sxdci','sptdci','octdci','nvndci','vi','unvi']
    if (shortExtensions == false) {
        extensions = ['', ' thousand', ' million', ' billion', ' trillion', ' quadrillion', ' quintillion', ' sextillion', ' septillion', ' octillion', ' nonillion', ' decillion', ' undecillion',' duodecillion',' tredecillion',' quattuordecillion',' quinquadecillion',' sexdecillion',' septendecillion',' octodecillion',' novendecillion',' vigintillion',' unvigintillion']
    }
    let extensionNumber = formattedNumber.count(',')
    if ((extensionNumber == 0) || (extensionNumber > extensions.length - 1)) {
        return formattedNumber
    }
    let frickShit = (function(){ if(extensionNumber != 1) { return "." + formattedNumber.split(',')[1] } else { return "" } })
    let finalReturn = formattedNumber.split(',')[0] + frickShit() + extensions[extensionNumber]
    return finalReturn
}
