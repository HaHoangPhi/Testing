const exampleModal = document.getElementById("exampleModal");
if (exampleModal) {
  exampleModal.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const recipient2 = button.getAttribute("data-bs-Tma");
    const recipient = button.getAttribute("data-bs-Tname");
    const recipient1 = button.getAttribute("data-bs-Tgia");
    // If necessary, you could initiate an Ajax request here
    // and then do the updating in a callback.

    // Update the modal's content.
    const modalTname = exampleModal.querySelector(".Tname");
    modalTname.textContent = `${recipient}`;
    const modalTgia = exampleModal.querySelector(".Tgia");
    modalTgia.textContent = `${recipient1}`;
    $("input[name='matour']").val(recipient2);
    $("input[name='tentour']").val(recipient);
    $("input[name='giatour']").val(recipient1);
  });
}
