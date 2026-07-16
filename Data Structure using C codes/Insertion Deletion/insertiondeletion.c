#include <stdio.h>
int main() {
    int arr[50],n,i;

    printf("Enter the Size of the Array : ");
    scanf("%d",&n);

    printf("Enter the %d elements in the Array : ", n);
    for(i = 0; i < n; i++){
        scanf("%d", &arr[i]);
    }

    printf("The Elements are : ");
    for(i = 0; i < n; i++){
        printf("%d ",arr[i]);
    }

    //insertion :

    int pos,val;

    printf("\nenter the Position and value to add : ");
    scanf("%d %d",&pos,&val);

    for(i = n; i > pos; i--){
        arr[i] = arr[i-1];
    }

    arr[pos] = val;
    n++;

    printf("Updated array is : ");
    for(i = 0; i < n; i++){
        printf("%d ",arr[i]);
    }

    //deletion :

    printf("\nEnter the position to Delete : ");
    scanf("%d",&pos);

    for(i = pos; i < n-1; i++){
        arr[i] = arr[i + 1];
    }
    n--;

    printf("Updated array is : ");
    for(i = 0; i < n; i++){
        printf("%d ",arr[i]);
    }

    return 0;
}