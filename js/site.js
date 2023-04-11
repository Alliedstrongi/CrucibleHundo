function displayMessage() {
  let msg = document.getElementById("message").value;
  //alert(msg);

  Swal.fire({
    backdrop: false,
    title: "Through All Odds",
    text: msg,
  });
}
