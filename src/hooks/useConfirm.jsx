import Swal from 'sweetalert2';

export const useConfirm = () => {
  const confirm = ({ title, text }) => {
    return Swal.fire({
      title: title || '¿Estás seguro?',
      text: text || '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then(result => result.isConfirmed);
  };

  return confirm;
};