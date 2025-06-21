        break;
      }
    }
  }
}

function mouseReleased() {
  if (fase === 4 && arrastandoVerdura) {
    if (mouseX > cestoVerduras.x - cestoVerduras.width && 
        mouseX < cestoVerduras.x + cestoVerduras.width &&
        mouseY > cestoVerduras.y - cestoVerduras.height && 
        mouseY < cestoVerduras.y + cestoVerduras.height) {
      arrastandoVerdura.colhida = true;
      verdurasColhidas++;
    }
    arrastandoVerdura.arrastando = false;
    arrastandoVerdura = null;
  }
}

function mouseDragged() {
  if (fase === 4 && arrastandoVerdura) {
    arrastandoVerdura.x = mouseX;
    arrastandoVerdura.y = mouseY;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  videoCampo.size(width, height);
}

function pararTodosSons() {
  musicaCampoliga.stop();
  somCaminhao.stop();
  somFestejando.stop();
}
