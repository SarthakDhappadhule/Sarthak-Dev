#include <iostream>
// using namespace std;
int main() {
    int a, b;
    char opt;

    std::cout<<"Enter the Operator : ";
    std::cin>>opt;

    std::cout<<"Enter the First Number : ";
    std::cin>>a;

    std::cout<<"Enter the Second Number : ";
    std::cin>>b;

    switch (opt) {

        case '+':
        std::cout<<"Addition = "<<a + b;
        break;

        case '-':
        std::cout<<"Subtraction = "<<a - b;
        break;

        case '*':
        std::cout<<"Multiplication = "<<a * b;
        break;

        case '/':
        std::cout<<"Division = "<<a / b;
        break;

        case '%':
        std::cout<<"Modulus = "<<a % b;
        break;
    
    default:
        std::cout<<"Invalid Operator!";
        break;
    }

    return 0;
    
}