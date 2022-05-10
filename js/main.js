// ! Quản lí sinh viên
function tinh(){
    let diemChuan = Number(document.getElementById('diemchuan').value);
    let diemMon1 = Number(document.getElementById('mon1').value);
    let diemMon2 = Number(document.getElementById('mon2').value);
    let diemMon3 = Number(document.getElementById('mon3').value);
    let khuVuc = document.getElementById('khuvuc').value;
    let doiTuong = document.getElementById('doituong').value;
    let kqBai1 = document.getElementById('result1');
    let diemTong = 0;
    let tong3Mon = diemMon1 + diemMon2 + diemMon3;
//---------------------------------------------------------------->
    diemTong = tongDiem(diemMon1,diemMon2,diemMon3,khuVuc,doiTuong,tong3Mon);
    if(diemTong == 0){
        kqBai1.innerHTML = 'Thí sinh thi trượt !';
        kqBai1.style.color = 'red';
    }else if(diemTong >= diemChuan){
        kqBai1.innerHTML = 'Thí sinh thi Đậu';
    }else{
        kqBai1.innerHTML = 'Thí sinh thi trượt !';
        kqBai1.style.color = 'red';
    }
}
function tongDiem(mon1,mon2,mon3,kv,dt,tong){
    var result;
//-------------->
    if(mon1==0 || mon2==0 || mon3==0){
        result = 0;
    }else if(kv == 'kv0'){
        result = tong;
    }else if(kv == 'kv1'){
        result = tong + 2;
    }else if(kv == 'kv2'){
        result = tong + 1;
    }else{
        result = tong + 0.5;
    }

    if(result == 0){
        return 0;
    }else if(dt == 'dt0'){
        return result;
    }else if(dt == 'dt1'){
        return result + 2.5;
    }else if(dt == 'dt2'){
        return result + 1.5;
    }else{
        return result + 1;
    }
}
//! Tính tiền điện
function tinhTienDien(){
    let name = document.getElementById('name').value;
    let soKW = Number(document.getElementById('soKW').value);
    let kqBai2 = document.getElementById('result2');
    if(soKW < 0){
        kqBai2.innerHTML = 'Nhập số KW lớn hơn 0 !'
        kqBai2.style.color = 'red';
    }else if(name == ''){
        kqBai2.innerHTML = 'Nhập đầy đủ tên !'
        kqBai2.style.color = 'red';
    }else{
        kqBai2.innerHTML = 'Tiền điện ' + name + ' phải trả là: ' + tienDien(soKW).toLocaleString() + 'VND';
    }
}
function tienDien(kw){
    var gia50KWDau = 50*500;
    var giaKw50_100 = 50*650;
    var giaKw100_200 = 85000;
    var giaKw200_350 = 1100*150;
    if(kw <= 50){
        return kw * 500;
    }else if(kw <= 100){
        return gia50KWDau + (kw-50)*650;
    }else if(kw <=200){
        return gia50KWDau + giaKw50_100 + (kw-100)*850;
    }
    else if(kw <= 350){
        return gia50KWDau + giaKw50_100 + giaKw100_200 + (kw-200)*1100;
    }else{
        return  gia50KWDau + giaKw50_100 + giaKw100_200 + giaKw200_350 + (kw-350)*1300;
    }
}
