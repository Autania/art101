
// Author: Autania Mierow
// Date: 25 November 2024
// lab15.js
// lab15.js

$(document).ready(function () {
    // Add click event listener to the button
    $("#fetch-evolution").click(function () {
        // Get the chain ID from the input field
        const chainId = $("#chain-id").val();
        if (!chainId) {
            $("#output").html("<p>Please enter a valid Evolution Chain ID.</p>");
            return;
        }

        const apiURL = `https://pokeapi.co/api/v2/evolution-chain/${chainId}/`;

        // Make AJAX call
        $.ajax({
            url: apiURL,
            type: "GET",
            dataType: "json",
            success: function (data) {
                // Clear the output div
                $("#output").empty();

                // Process the evolution chain
                const evolutionChain = [];
                let current = data.chain;

                while (current) {
                    // Add the current Pokémon to the chain
                    evolutionChain.push({
                        name: current.species.name,
                        url: current.species.url,
                    });

                    // Move to the next evolution
                    current = current.evolves_to[0];
                }

                // Create a list of evolution stages
                const chainList = $("<ul></ul>");
                evolutionChain.forEach((stage, index) => {
                    chainList.append(
                        `<li>Stage ${index + 1}: <a href="${stage.url}" target="_blank">${stage.name}</a></li>`
                    );
                });

                // Append the chain list to the output div
                $("#output").append(chainList);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // Handle errors
                $("#output").html(
                    `<p>Error: Unable to fetch data. Please check the Evolution Chain ID.</p>`
                );
                console.error("Error:", textStatus, errorThrown);
            },
        });
    });
});

