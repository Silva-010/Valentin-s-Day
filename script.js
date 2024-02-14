$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var modal = document.getElementById('modal');
  
    btn_open.click(function() {
      open();
    });
    btn_reset.click(function() {
      close();
    });
  
    function open() {
      envelope.addClass("open").removeClass("close");
    }
  
    function close() {
      envelope.addClass("close").removeClass("open");
    }
  
    setTimeout(function() {
      document.getElementById("loader").style.display = "none";
      document.getElementById("cabecera").style.display = "block";
    }, 3000);
  
    // Function to display the modal
    function showModal() {
      modal.style.display = "block";
    }
  
    // Function to close the modal
    window.closeModal = function() {
      modal.style.display = "none";
    };
  
    // Show modal when envelope is clicked and open
    envelope.click(function() {
      if (envelope.hasClass('open')) {
        showModal();
      }
    });
  });
  