Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  #

  get 'insidecomp', to: 'sample#insidecomp'
  get 'outsidecomp', to: 'sample#outsidecomp'

end
