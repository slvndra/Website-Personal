document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const namaTugas = document.getElementById('namaTugas').value;
    const namaMatkul = document.getElementById('namaMatkul').value;
  
    const li = document.createElement('li');
    li.textContent = `${namaTugas} - ${namaMatkul}`;
  
    document.getElementById('taskContainer').appendChild(li);
  
    // Reset form
    document.getElementById('taskForm').reset();
  });
  