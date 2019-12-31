function isLeapYear(input){
    let this_date = new Date(input);
    let const_year = 1900;
    if(this_date.toDateString() === 'Invalid Date') { 
        return 'Invalid Date';
    } else {
      let this_year = this_date.getYear();
      if(((this_date.getYear() % 4 === 0) && (this_date.getYear() % 100 !== 0)) || (this_date.getYear() % 400 === 0)){
        return const_year + this_year + ' is a leap year';
      } else {
        return const_year + this_year + ' is not a leap year';
      }
    }
}
isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00'); 
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);