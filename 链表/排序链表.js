// https://leetcode-cn.com/problems/sort-list/
//排序链表
//给你链表的头结点 head ，请将其按 升序 排列并返回 排序后的链表 。
var sortList = function(head) {
    if(head === null || head.next === null) return head;

    // 使用快慢指针寻找中心点
    let slow = head;
    let fast = head.next;

    while(fast !=null && fast.next!=null){
        slow = slow.next;
        fast = fast.next.next
    }
    // 使用中心点作为分界点，分割链表

    let temp = slow.next;
    slow.next = null;

    let left = sortList(head);
    let right = sortList(temp);
    // 合并链表，新申请一个链表
    let h = new ListNode(0);
    let res = h;
    while(left!=null && right !=null){
        if(left.val< right.val){
            h.next = left;
            left = left.next;
        } else {
            h.next = right;
            right = right.next;
        }
        h = h.next;// 移动到下一个链表待插入节点
    }
    // left或者right可能还有剩余

    h.next = left !== null?left:right;
    return res.next
}
