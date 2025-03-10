// Function to create and append the modal to the DOM
function createModal() {
    const modalHTML = `
        <div class="modal fade" id="propertyModal" tabindex="-1" aria-labelledby="propertyModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="propertyModalLabel">Property Details</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img id="modalPropertyImage" src="" alt="Property Image" class="img-fluid rounded">
                            </div>
                            <div class="col-md-6">
                                <h3 id="modalPropertyTitle" class="mb-3"></h3>
                                <p id="modalPropertyDescription" class="text-muted"></p>
                                <ul id="modalPropertyFeatures" class="list-unstyled"></ul>
                                <p id="modalPropertyLocation" class="mt-3"><strong>Location:</strong> <span></span></p>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <a id="modalPropertyLink" href="#" class="btn btn-primary" target="_blank">View More</a>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`;

    // Append the modal to the body
    document.body.insertAdjacentHTML("beforeend", modalHTML);
}

// Call the function to create the modal
createModal();