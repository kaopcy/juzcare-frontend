export const loginCase = (error) => {
    switch (error) {
      case 'Username or Password Incorrect':
        return 'ชื่อผู้ใช้หรือรหัสผ่านผิด';
      case 'User not found':
        return 'ไม่พบผู้ใช้';
      default:
        return error;
    }
  };
  
  export const registerCase = (error) => {
    switch (error) {
      case 'User already exist':
        return 'มีบัญชีผู้ใช้นี้แล้ว';
      case 'User not found':
        return 'ไม่พบผู้ใช้';
      case 'password strength issue':
        return 'รหัสผ่านไม่ปลอดภัย';
      default:
        return error;
    }
  };
  export const initialCase = (error) => {
    switch (error) {
      case 'User not exists':
        return 'ไม่พบผู้ใช้ดังกล่าว';
      case 'User not found':
        return 'ไม่พบผู้ใช้';
      case 'password strength issue':
        return 'รหัสผ่านไม่ปลอดภัย';
      default:
        return error;
    }
  };
  