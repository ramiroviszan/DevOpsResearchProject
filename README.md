# DevOpsResearchProject

Solo para recordar como configurar heroku y git para usar una subcarpeta dentro del repositorio:
si la carpeta se llama 'Backend' el comando es:
```plain
git subtree push --prefix Backend heroku master
```

Url Backend
https://app-obli-devops-backend.herokuapp.com/


Instalar hambiente de desarrollo del backend:
- instalar heroku desde la pagina.

- Primero hay que bajar el repositorio del profesor con:
```plain
  git clone git@github.com:ramiroviszan/DevOpsResearchProject.git
```

- luego moverte a la carpeta del repositorio.

- listar los remotos con 
git remote -v

- ver que solo este el remoto del repositorio.

- agregar el remoto de heroku con:
git remote add heroku https://git.heroku.com/app-obli-devops-backend.git

- listar los remotos y ver que existan dos remotos (en realidad son 4), pero uno es al repositorio del profesor y otro a heroku

- probar que ande heroku con:
heroku open

Remotos:
<pre>
DevOpsResearchProject git:(master) git remote -v

heroku  https://git.heroku.com/app-obli-devops-backend.git (fetch)
heroku  https://git.heroku.com/app-obli-devops-backend.git (push)
origin  git@github.com:ramiroviszan/DevOpsResearchProject.git (fetch)
origin  git@github.com:ramiroviszan/DevOpsResearchProject.git (push)
</pre>





