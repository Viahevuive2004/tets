document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("user-statistics-chart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Bệnh Nhân", "Bác Sĩ", "Quản Trị Viên"],
            datasets: [{
                label: "Số lượng",
                data: [1234, 567, 10], // Thay bằng dữ liệu thực tế
                backgroundColor: ["#007bff", "#28a745", "#ffc107"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });
});