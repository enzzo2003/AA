document.addEventListener("DOMContentLoaded", function () {
    const classSelector = document.querySelector(".class-selector");
    classSelector.addEventListener("change", function (event) {
      const selectedClass = event.target.value;
      const filteredStudents = allStudents.filter(
        (student) => student.class === selectedClass
      );
      displayStudents(filteredStudents);
    });
  });
  const saveButton = document.getElementById('saveButton');



saveButton.addEventListener('click', () => {
    takeScreenshot();
 
});


  const closeAlert = document.getElementById("closeAlert");
closeAlert.addEventListener("click", function () {
  const customAlert = document.getElementById("customAlert");
  customAlert.style.display = "none";
});


function takeScreenshot() {
  html2canvas(studentsArea).then((canvas) => {
    const imgData = canvas.toDataURL("image/png");
    const screenshot = document.getElementById("screenshot");
    const customAlert = document.getElementById("customAlert");
    const downloadLink = document.getElementById("downloadLink");

    screenshot.src = imgData;

    customAlert.style.display = "block";

    downloadLink.href = imgData;

    sendEmail(imgData); // Chame a função sendEmail com o imgData
  });
}


const allStudents = [
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoA", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoA", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoB", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  { name: "João Silva", class: "8anoB", image: "https://img.freepik.com/fotos-gratis/lindo-retrato-de-cachorro_23-2149218450.jpg" },
  { name: "Maria Oliveira", class: "8anoB", image: "https://veja.abril.com.br/wp-content/uploads/2017/01/cao-labrador-3-copy.jpg?quality=70&strip=info&w=1280&h=720&crop=1" },
  
];

  
  

  const studentsArea = document.querySelector(".students-area");

// Calcula o número de alunos e colunas necessárias
const numAlunos = allStudents.filter(student => student.class === selectedClass).length;
const numColunas = Math.ceil(numAlunos / 5); // Arredonda para cima para garantir que haja pelo menos uma coluna

// Atualiza o CSS para definir o número de colunas dinamicamente
studentsArea.style.gridTemplateColumns = `repeat(${numColunas}, 1fr)`;

  
  function displayStudents(students) {
    studentsArea.innerHTML = "";

     // Adicione esta linha para criar espaços vazios extras
     const totalSpots = Math.ceil(students.length / 5) * 5;
     const emptySpots = totalSpots - students.length;


     const countDisplay = document.getElementById("countDisplay");
     countDisplay.textContent = `Alunos: ${students.length} | Vazios: ${emptySpots}`;

     for (let i = 0; i < totalSpots; i++) {
       const studentElement = document.createElement("div");
       studentElement.classList.add("student");
   
       if (i < students.length) {
         const studentImg = document.createElement("img");
         studentImg.src = students[i].image; // Use a imagem do objeto do aluno
         studentImg.classList.add("student-image");
         studentElement.appendChild(studentImg);
   
         const studentName = document.createElement("div");
         studentName.textContent = students[i].name;
         studentElement.appendChild(studentName);
   
         studentElement.setAttribute("id", `student-${i}`);
       } else {
         studentElement.classList.add("empty-spot");
         studentElement.textContent = "VAZIO";
       }
       studentElement.setAttribute("draggable", "true");
   
       studentElement.addEventListener("dragstart", handleDragStart);
       studentElement.addEventListener("dragend", handleDragEnd);
   
       studentsArea.appendChild(studentElement);
     }

    // Adiciona event listeners para a área de alunos
    studentsArea.addEventListener("dragover", handleDragOver);
    studentsArea.addEventListener("drop", handleDrop);
  }
  
  function handleDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.target.style.opacity = "0.5";
  }
  
  function handleDragOver(event) {
    event.preventDefault();
  }
  
  function handleDrop(event) {
    event.preventDefault();
  
    if (event.target.classList.contains("student")) {
      const draggedElementId = event.dataTransfer.getData("text/plain");
      const draggedElement = document.getElementById(draggedElementId);
  
      // Troca a posição dos alunos
      const tempContent = event.target.innerHTML;
      event.target.innerHTML = draggedElement.innerHTML;
      draggedElement.innerHTML = tempContent;
  
      // Adiciona um ID único a cada aluno
      event.target.setAttribute("id", `student-${Date.now()}`);
      draggedElement.setAttribute("id", `student-${Date.now() + 1}`);
  
      // Limpa o estilo aplicado durante o arrastar e soltar
      draggedElement.style.background = "";
    }
  }
  
  function handleDragEnd(event) {
    event.target.style.opacity = "1";
  }

 
  
  

  
