#include <stdio.h>

int fac(int n){
    if(n <= 1) return 1;
    return n * fac(n-1);
}

int main(){
    int a;

    printf("Enter the Number : ");
    scanf("%d", &a);

    int ans = fac(a);
    printf("Factorial of %d is %d\n", a, ans);
    return 0;
}