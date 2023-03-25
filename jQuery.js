
$(document).ready(function(){
    $.getJSON({
        url: "https://jqery-server-site.vercel.app/bookingData",
        dataType: "json",
        success: function(data) { 
          $.map(data, function(collection) {
            $('#myDiv').append(
              `<div class="col">
              <div class="card">
                <div class="card">
                  <img src="${collection.image}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${collection.title}</h5>
                    <p class="card-text">${collection.description}</p>
                    <button id="${collection._id}" data-id="${collection.id}" type="button" class="btn  btn-dark collection-button">View Details</button>
                  </div>
                </div>
                </div>
              </div>`
            );

              $(`#${collection._id}`).on('click', function() {
              const id = `${collection._id}`;
              console.log(id)
              $.ajax({
                url: `https://jqery-server-site.vercel.app/bookingData/?id=${id}`,
                dataType: "json",
                success: function(data) {
                  const params = new URLSearchParams(window.location.href=`/collection.html?id/${id}`);
                  console.log(data) 
                } 
              });
            });
          });

          $(document).ready(function() {
              $('#modalContent').append(`
              <div class="mb-3">
           <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
              `)
          }); 
        },
        error: function(xhr, status, error) { 
          console.error(xhr, status, error);
        }
      });
})

    // $(document).on('click', '.collection-button', function() {
    //   const id = $(this).data('id');
    //   $.getJSON(`https://jqery-server-site.vercel.app/collectionData?id=${id}`, function(data) {
        
    //     $('#collection-content').load(`/collection.html?${$.param(data)}`);
    //     console.log(data)
    //   });
    // });
