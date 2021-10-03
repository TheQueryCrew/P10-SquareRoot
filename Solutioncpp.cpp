//Babylonian method for finding a square root.

#include <iostream>
using namespace std;
double sqrt(double number)
{
    double error = 0.00001; //define the precision of your result
    double s = number;

    while ((s - number / s) > error) //loop until precision satisfied 
    {
        s = (s + number / s) / 2;
    }
    return s;
}
int main() {
  
    double ans  = sqrt(4);
    cout<<ans;

    return 0;
}
