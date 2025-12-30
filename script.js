document.addEventListener('DOMContentLoaded', () => {
    // เลือกชิ้นส่วนกล้ามเนื้อทั้งหมดที่มี class 'muscle-group'
    const muscles = document.querySelectorAll('.muscle-group');

    muscles.forEach(muscle => {
        // เมื่อมีการคลิก
        muscle.addEventListener('click', function() {
            // ดึงลิงก์จาก data-link ใน HTML
            const link = this.getAttribute('data-link');
            
            if (link) {
                // เปลี่ยนหน้าเว็บไปยังลิงก์นั้น
                window.location.href = link;
            } else {
                alert('ยังไม่ได้สร้างหน้านี้ครับ');
            }
        });
    });
});