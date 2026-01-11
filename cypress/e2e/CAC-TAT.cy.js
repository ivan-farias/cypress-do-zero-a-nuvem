describe('Central de Atendimento ao Cliente TAT', () => {
  
  beforeEach(() => {
    cy.visit('src/index.html');
  });
  it('Verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');

  })
  it('Prencher campos obrigatórios e enviar o formulário', () => {
    const data = {
      firstName: 'Ivan',
      lastName: 'Farias',
      email: 'ivanfarias27@hotmail.com',
      text: 'Teste.'
    }
    cy.preencherFormulario(data)

    cy.get('.success').should('be.visible');
  });

  it('Exibe mensagem de erro ao submeter o formulário com um email com formatação inválida!', () => {
    const data = {
      firstName: 'Ivan',
      lastName: 'Farias',
      email: 'ivanfarias27@hotmail.com',
      text: 'Teste.'
    }
    cy.preencherFormulario(data);
  }); 

  it('Envia o formulário com sucesso usando um comando customizado.', () => {
    const data = {
      firstName: 'Ivan',
      lastName: 'Farias',
      email: 'ivanfarias27@hotmail.com',
      text: 'Teste.'
    }
    cy.preencherFormulario()

    cy.get('.success').should('be.visible')
  });
  
  it('Seleciona um produto (YouTube) por seu texto', () => {
   cy.get('#product')
    .select('YouTube')
    .should('have.value', 'youtube')
  });

  it('Seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product')
    .select('mentoria')
    .should('have.value', 'mentoria')
  });

  it('Seleciona um produto (Blog) pelo seu índice.', () => {
    cy.get('#product')
      .select(1)
      .should('have.value', 'blog')
  });

  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should('be.checked')
  });

  it('Marca cada tipo de atendimento', () => {
    // cy.get('input[type="radio"][value="feedback"]')
    //   .check()
    //   .should('be.checked')
      
    //   cy.get('input[type="radio"][value="ajuda"]')
    //   .check()
    //   .should('be.checked')

    //   cy.get('input[type="radio"][value="elogio"]')
    //   .check()
    //   .should('be.checked')

    cy.get('input[type="Radio"]')
      .each((typeOfService) => {
        cy.wrap(typeOfService)
          .check()
          .should('be.checked')
      })
  });

  it('Marca ambos checkboxs, depois desmarca o último', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
  });

  it('Exibe a mensagem de erro quando o telefone se torna obrigatório mas não é preenchido andes do formulário', () => {
    cy.get('#firstName').type('Ivan')
    cy.get('#lastName').type('Farias')
    cy.get('#email').type('ivan@teste.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('#phone-checkbox').check()
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')
  });
  
  it('Seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });

  it('Seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop'})
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });

  it('Seleciona um arquivo utilizando uma fixture na qual foi dado um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
      .selectFile('@sampleFile')
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  });
  it('Verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  });

  it('Acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click();
    
    cy.contains('h1','CAC TAT - Política de Privacidade')
      .should('be.visible');
  });
})

