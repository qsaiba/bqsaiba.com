const designs = [
    {
        id: 1,
        image: 'designs/design1.jpg',
        namePosition: { x: '50%', y: '85%' },
        fontSize: '2.8rem',
        fontFamily: 'El Messiri',
        textColor: '#2c5f2d'
    }
];

function init() {
    console.log('تم تحميل الموقع بنجاح!');
}

window.addEventListener('DOMContentLoaded', init);

let selectedDesign = null;

document.querySelectorAll('.design-card').forEach(card => {
    card.addEventListener('click', () => {
        const designId = card.dataset.designId;
        selectedDesign = designs.find(d => d.id == designId);
        openCustomizationModal();
    });
});

function openCustomizationModal() {
    const modal = document.getElementById('customizationModal');
    modal.style.display = 'block';
    document.getElementById('previewContainer').style.backgroundImage = `url(${selectedDesign.image})`;
}

document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('customizationModal').style.display = 'none';
});

document.getElementById('generateBtn').addEventListener('click', generateDesign);

function generateDesign() {
    const userName = document.getElementById('userName').value;
    if (!userName) return alert('الرجاء إدخال اسمك');
    
    const nameElement = document.createElement('div');
    nameElement.textContent = userName;
    nameElement.style.position = 'absolute';
    nameElement.style.left = selectedDesign.namePosition.x;
    nameElement.style.top = selectedDesign.namePosition.y;
    nameElement.style.transform = 'translate(-50%, -50%)';
    nameElement.style.fontFamily = selectedDesign.fontFamily;
    nameElement.style.fontSize = selectedDesign.fontSize;
    nameElement.style.color = selectedDesign.textColor;
    nameElement.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';

    const preview = document.getElementById('previewContainer');
    preview.innerHTML = '';
    preview.appendChild(nameElement);
}