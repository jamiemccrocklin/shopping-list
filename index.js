$('document').ready(function () {
$('.shopping-list').on('click', '.shopping-item-delete', function (e){
  console.log('delete ran')
    $(this).closest('li').remove();
})

$('.shopping-list').on('click', '.shopping-item-toggle', function(e){
    console.log('check ran');
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
})

$('#js-shopping-list-form').submit((e) => {
    e.preventDefault(); 
    let item = $('#shopping-list-entry').val();
    $('.shopping-list').append(`<li>
    <span class="shopping-item">` + item + `</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`)
})
})