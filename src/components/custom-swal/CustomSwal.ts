import Swal from 'sweetalert2';

export const CustomSwal = Swal.mixin({
  reverseButtons: true,
  heightAuto: false
});
