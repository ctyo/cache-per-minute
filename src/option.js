(function () {
    /*
     * フォームの初期化
     */
    var option = document.getElementById('option');
    var term   = document.getElementById('term');
    var unit   = document.getElementById('unit');
    
    for (var key in localStorage) {
	for (var i=0; i < option.delete.length; i++) {	
	    if (option.delete[i].value === key) {

		if (localStorage[option.delete[i].value] === 'true') {
		    option.delete[i].checked = true;
		} else {
		    option.delete[i].checked = false;
		}
	    }
	}
    }
    term.value = localStorage.term;
    unit.selectedIndex = localStorage.unit;

    /*
     * 保存関係の何か
     */
    var save_button = document.getElementById('save');
    save_button.addEventListener('click', function () {
	
	var form = this.form;
	
	for (var i=0; i < form.delete.length; i++) {
	    localStorage[form.delete[i].value] = form.delete[i].checked;
	}

	localStorage.term = form.term.value;
	localStorage.unit = form.unit.selectedIndex;
	
    });

})();
