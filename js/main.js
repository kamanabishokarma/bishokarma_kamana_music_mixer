const draggables = document.querySelectorAll('.draggable');
        const dropZones = document.querySelectorAll('.dropZone');
        const audioPlayer = document.getElementById('audio');

        // Drag and drop event listeners
        draggables.forEach(draggable => {
            draggable.addEventListener('dragstart', () => {
                draggable.classList.add('dragging');
            });

            draggable.addEventListener('dragend', () => {
                draggable.classList.remove('dragging');
            });
        });

        dropZones.forEach(dropZone => {
            dropZone.addEventListener('dragover', e => {
                e.preventDefault();
                dropZone.classList.add('hover');
            });

            dropZone.addEventListener('dragleave', () => {
                dropZone.classList.remove('hover');
            });

            dropZone.addEventListener('drop', e => {
                e.preventDefault();
                const draggable = document.querySelector('.dragging');
                dropZone.appendChild(draggable);
                dropZone.classList.remove('hover');

                const trackRef = draggable.getAttribute('data-trackref');
                audioPlayer.src = trackRef;
                audioPlayer.play();
            });
        });