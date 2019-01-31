let rec_fac = function(n)
{
  if(n==0)
  {
    return 1;
  } else
  {
    return n * rec_fac(n-1);
  }
}

console.log(rec_fac(7));
