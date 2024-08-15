// class Node{
//     constructor(a){
//         this.value=a;
//         this.next=undefined;
//     }
// }
// insertion_start=function(head, value){
//     let new_node=new Node(value);
//     new_node.next=head;
//     return new_node;
// }
// insertion_end=function(head, value){
//     let new_node=new Node(value);
//     let temp=head;
//     while(temp.next!=null){
//         temp=temp.next;
//     }
//     temp.next=new_node;
// }
// insertion_in_nth_node=function(head, n, value){
//     let new_node=new Node(value);
//     let temp=head;
//     while(n-1>0){
//         temp=temp.next;
//         n -= 1;
//     }
//     let x=temp.next;
//     temp.next=new_node;
//     new_node.next=x;
// }
// deletion_in_end=function(head){
//     let temp=head;
//     while(temp.next != null && temp.next.next != null){
//         temp=temp.next;
//     }
//     temp.next=temp.next.next;
// }
// deletion_in_nth_node=function(head, n){
//     let temp=head;
//     while(n-2 != 0){
//         temp=temp.next;
//         n -= 1;
//     }
//     temp.next=temp.next.next;
// }
// display=function(head){
//     let temp=head;
//     while(temp!=null){
//         console.log(temp.value);
//         temp=temp.next;
//     }
// }
// let node=new Node(5);
// //console.log(node);

// let head=new Node(5);

// head=insertion_start(head,10);
// head=insertion_start(head,6);
// head=insertion_start(head, 20);
// head=insertion_start(head,7);

// insertion_end(head, 77);
// insertion_end(head, 88);
// insertion_end(head, 99);
// insertion_end(head, 55);

// insertion_in_nth_node(head, 3, 100);

// head=head.next; //to delete at starting

// deletion_in_end(head);

// deletion_in_nth_node(head,3);

// //console.log(head);

// display(head);




//Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// function isPalindrome(head) {
//     const values = [];
//     let current = head;

//     // Step 1: Traverse the linked list and store the values in an array
//     while (current) {
//         values.push(current.val);
//         current = current.next;
//     }

//     // Step 2: Check if the array is a palindrome
//     let start = 0;
//     let end = values.length - 1;

//     while (start < end) {
//         if (values[start] !== values[end]) {
//             return false;
//         }
//         start++;
//         end--;
//     }

//     return true;
// }

// // Example usage:
// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// let node3 = new ListNode(2);
// let node4 = new ListNode(1);
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;

// console.log(isPalindrome(node1));  // Output: true



//Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// var deleteDuplicates = function (head) {
//     let current = head;
//     while (current !== null && current.next !== null) {
//         if (current.val === current.next.val) {
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     } return head;
// };
// let node1 = new ListNode(1);
// let node2 = new ListNode(1);
// let node3 = new ListNode(2);
// let node4 = new ListNode(3);
// let node5 = new ListNode(3);
// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// console.log(deleteDuplicates(node1)); 
