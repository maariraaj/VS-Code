class Node{
    constructor(a){
        this.value=a;
        this.next=undefined;
    }
}
insertion_start=function(head, value){
    let new_node=new Node(value);
    new_node.next=head;
    return new_node;
}
insertion_end=function(head, value){
    let new_node=new Node(value);
    let temp=head;
    while(temp.next!=null){
        temp=temp.next;
    }
    temp.next=new_node;
}
insertion_in_nth_node=function(head, n, value){
    let new_node=new Node(value);
    let temp=head;
    while(n-1>0){
        temp=temp.next;
        n -= 1;
    }
    let x=temp.next;
    temp.next=new_node;
    new_node.next=x;
}
deletion_in_end=function(head){
    let temp=head;
    while(temp.next != null && temp.next.next != null){
        temp=temp.next;
    }
    temp.next=temp.next.next;
}
deletion_in_nth_node=function(head, n){
    let temp=head;
    while(n-2 != 0){
        temp=temp.next;
        n -= 1;
    }
    temp.next=temp.next.next;
}
display=function(head){
    let temp=head;
    while(temp!=null){
        console.log(temp.value);
        temp=temp.next;
    }
}
let node=new Node(5);
//console.log(node);

let head=new Node(5);

head=insertion_start(head,10);
head=insertion_start(head,6);
head=insertion_start(head, 20);
head=insertion_start(head,7);

insertion_end(head, 77);
insertion_end(head, 88);
insertion_end(head, 99);
insertion_end(head, 55);

insertion_in_nth_node(head, 3, 100);

head=head.next; //to delete at starting

deletion_in_end(head);

deletion_in_nth_node(head,3);

//console.log(head);

display(head);